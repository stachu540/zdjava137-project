package pro.sdacademy.zdjava137.group3.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    //#TODO add Category:
    //@ManyToOne
    //    private Category category;
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
