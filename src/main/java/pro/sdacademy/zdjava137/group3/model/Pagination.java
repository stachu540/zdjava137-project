package pro.sdacademy.zdjava137.group3.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pagination<T> {
    private Collection<T> items;
    private long count;
}
