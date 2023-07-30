package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private long id;
    @Email
    @NotEmpty
    private String email;
    @NotEmpty
    private String username;
    @NotEmpty
    private String password;
    @NotNull
    @Enumerated(EnumType.STRING)
    private UserPermission permission;
    @CreationTimestamp
    private Instant createdAt;
    @UpdateTimestamp
    private Instant updatedAt;
    @OneToMany
    private List<UserAddress> addresses;


    public User append(User old) {
        id = old.id;
        if (email == null || email.isBlank()) {
            email = old.email;
        }
        if (username == null || username.isBlank()) {
            username = old.username;
        }
        if (password == null || password.isBlank()) {
            password = old.password;
        }
        if (permission == null) {
            permission = old.permission;
        }
        if (createdAt == null) {
            createdAt = old.createdAt;
        }
        if (updatedAt == null) {
            updatedAt = old.updatedAt;
        }
        if (addresses == null || addresses.isEmpty()) {
            addresses = old.addresses;
        }
        return this;
    }
}
