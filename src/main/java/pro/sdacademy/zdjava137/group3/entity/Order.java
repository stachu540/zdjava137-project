package pro.sdacademy.zdjava137.group3.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ElementCollection
    private List<ProductCart> products;
    @ManyToOne
    private User buyer;
    @OneToOne
    private UserAddress address;
    @Nullable
    private Delivery delivery;

    @OneToOne
    private Payment payment;

    @CreationTimestamp
    private Instant createdAt;
}
