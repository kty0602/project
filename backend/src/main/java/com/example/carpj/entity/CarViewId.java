package com.example.carpj.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarViewId implements Serializable {
    private Long id;
    private Integer cDNo;
}
