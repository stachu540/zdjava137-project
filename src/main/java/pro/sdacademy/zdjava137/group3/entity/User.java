package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;


import java.time.Instant;
import java.util.List;

@Data
@Entity(name = "user")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String username;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserPermission permission;
    @CreationTimestamp
    private Instant createdAt;
    @UpdateTimestamp
    private Instant updatedAt;
    @ElementCollection
    private List<UserAddress> addresses;
}
