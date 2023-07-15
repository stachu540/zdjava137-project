package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.*;
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
    private double pricePerUnit;
    private int units;
    @ManyToOne
    private User seller;
    @CreationTimestamp
    private Instant createdAt;
    @UpdateTimestamp
    private Instant updatedAt;
}
