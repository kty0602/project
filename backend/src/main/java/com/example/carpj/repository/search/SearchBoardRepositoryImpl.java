package com.example.carpj.repository.search;

import com.example.carpj.entity.Board;
import com.example.carpj.entity.QBoard;
import com.example.carpj.entity.QMember;
import com.example.carpj.entity.QReply;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.Tuple;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
public class SearchBoardRepositoryImpl extends QuerydslRepositorySupport implements SearchBoardRepository {
    public SearchBoardRepositoryImpl() {
        super(Board.class);
    }

    @Override
    public Board search1() {
        log.info("search1...................");

        QBoard board = QBoard.board;
        QReply reply = QReply.reply;
        QMember member = QMember.member;

        JPQLQuery<Board> jpqlQuery = from(board);
        jpqlQuery.leftJoin(member).on(board.id.eq(member));
        jpqlQuery.leftJoin(reply).on(reply.board.eq(board));

        JPQLQuery<Tuple> tuple = jpqlQuery.select(board, member.id, reply.count());
        tuple.groupBy(board);

        log.info("-----------------------------------");
        log.info(tuple);
        log.info("-----------------------------------");

        List<Tuple> result = tuple.fetch();
        log.info(result);

        return null;
    }

    @Override
    public Page<Object[]> searchPage(String type, Pageable pageable) {
        log.info("searchPage................................");
        QBoard board = QBoard.board;
        QReply reply = QReply.reply;
        QMember member = QMember.member;

        JPQLQuery<Board> jpqlQuery = from(board);
        jpqlQuery.leftJoin(member).on(board.id.eq(member));
        jpqlQuery.leftJoin(reply).on(reply.board.eq(board));

        JPQLQuery<Tuple> tuple = jpqlQuery.select(board, member, reply.count());

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        BooleanExpression expression = board.bno.gt(0);

        booleanBuilder.and(expression);
        if (type != null) {
            String[] answer = type.split(":");          // ":" 중심으로 나눔 Ex. t:20  -> [0]=t / [1]=20
            String[] typeArr = answer[0].split("");     // 만약 다중 검색 조건 tw or tc라고 있을 경우 t , w 이런식으로 나눔
            BooleanBuilder conditionBuilder = new BooleanBuilder();
            if (answer.length > 1 && !StringUtils.isEmpty(answer[1])) {
                for (String t : typeArr) {
                    switch (t) {
                        case "t":       //(테스트: 성공)
                            conditionBuilder.or(board.title.contains(answer[1]));
                            break;
                        case "w":       //(테스트: 성공)
                            conditionBuilder.or(member.name.contains(answer[1]));
                            break;
                        case "c":       //(테스트: 성공)
                            conditionBuilder.or(board.content.contains(answer[1]));
                            break;
                    }
                    booleanBuilder.and(conditionBuilder);
                }
            }
        }

        tuple.where(booleanBuilder);
        Sort sort = pageable.getSort();

        sort.stream().forEach(order -> {
            Order direction = order.isAscending() ? Order.ASC : Order.DESC;
            String prop = order.getProperty();

            PathBuilder orderByExpression = new PathBuilder(Board.class, "board");
            tuple.orderBy(new OrderSpecifier(direction, orderByExpression.get(prop)));
        });
        tuple.groupBy(board);

        tuple.offset(pageable.getOffset());
        tuple.limit(pageable.getPageSize());

        List<Tuple> result = tuple.fetch();

        log.info(result);

        long count = tuple.fetchCount();
        log.info("COUNT: " + count);

        return new PageImpl<Object[]>(
                result.stream().map(t -> t.toArray()).collect(Collectors.toList()), pageable, count
        );
    }
}

