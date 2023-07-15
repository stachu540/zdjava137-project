package pro.sdacademy.zdjava137.group3.entity;

import jakarta.annotation.Nullable;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Embeddable
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
}
