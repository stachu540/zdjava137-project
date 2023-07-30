package pro.sdacademy.zdjava137.group3.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Delivery {
    private String name;
    private String number;
    private String uri;
}