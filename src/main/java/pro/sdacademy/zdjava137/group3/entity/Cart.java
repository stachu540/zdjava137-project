package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @ElementCollection
    private List<ProductCart> products;
    @ManyToOne
    private User owner;
}