package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.springframework.data.annotation.Id;



@Data
public class Bid {
    @Id
    @GeneratedValue
    private Long id;
    private double price;

    @ManyToOne
    private Product product;

    @ManyToOne
    private User user;
}
