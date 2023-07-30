package pro.sdacademy.zdjava137.group3.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
public class UserAddress {
    @NotEmpty
    private String address;
    @NotEmpty
    private String number;
    @Nullable
    private String houseNumber;
    @NotEmpty
    private String postalCode;
    @NotEmpty
    private String city;
    @NotEmpty
    private String country;
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

}
