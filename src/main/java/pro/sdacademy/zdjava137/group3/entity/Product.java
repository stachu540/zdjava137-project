package pro.sdacademy.zdjava137.group3.entity;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.List;

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
