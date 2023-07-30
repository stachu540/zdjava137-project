package pro.sdacademy.zdjava137.group3.model;

import lombok.Data;

@Data
public class ProductUpdateDTO {

    private String name;
    private String description;
    private Double price;
    private Integer quantity;
}