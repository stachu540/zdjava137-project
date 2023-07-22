package pro.sdacademy.zdjava137.group3.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
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
