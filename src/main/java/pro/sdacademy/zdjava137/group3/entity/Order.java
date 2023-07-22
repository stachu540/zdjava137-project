package pro.sdacademy.zdjava137.group3.entity;

import jakarta.annotation.Generated;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

//@Data
//@Entity
//public class Order {
//    @Id
//    @GeneratedValue(strategy = GenerationType.UUID)
//    private UUID id;
//    @ElementCollection
//    private List<ProductCart> products;
//    @ManyToOne
//    private User buyer;
//    @Embedded
//    private UserAddress address;
//    @Nullable
//    private Delivery delivery;
//
//    @OneToOne
//    private Payment payment;
//
//    @CreationTimestamp
//    private Instant createdAt;
//}
