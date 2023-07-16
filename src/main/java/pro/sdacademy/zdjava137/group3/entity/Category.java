package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class Category {
    @Id
    @GeneratedValue
    private long id;
    @NotEmpty
    @Size(min = 3)
    private String name;
    private String description;
    @OneToOne
    private Category parent;
}
