package pro.sdacademy.zdjava137.group3.entity;


import jakarta.persistence.*;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Data
@Entity

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotEmpty
    @Size(min = 3)
    private String name;

    //#TODO add Category:
    @ManyToOne
    private Category category;
    private String description;
    private double price;
    private int quantity;

//    #TODO add User:
//    @ManyToOne
//    private User seller;
//    @CreationTimestamp
//    private Instant createdAt;
//    @UpdateTimestamp
//    private Instant updatedAt;



}
