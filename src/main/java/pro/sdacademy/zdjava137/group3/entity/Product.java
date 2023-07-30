package pro.sdacademy.zdjava137.group3.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Data
@Entity

public class Product {

    @Id
    @GeneratedValue
    private long id;
    private String name;

    @ManyToOne
    private Category category;
    private String description;
    private double price;
    private int quantity;

    @ManyToOne
    private User seller;
    @CreationTimestamp
    private Instant createdAt;
    @UpdateTimestamp
    private Instant updatedAt;

    private String comment;


}
