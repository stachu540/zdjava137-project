package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class ProductCart {
    //    private Product2 product;
    private int quantity;
    private double pricePerQuantity;
}
