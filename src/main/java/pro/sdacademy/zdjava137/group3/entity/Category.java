package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Category {
    @Id
    private long id;
    private String name;
    private String description;
    @OneToOne
    private Category parent;
}
