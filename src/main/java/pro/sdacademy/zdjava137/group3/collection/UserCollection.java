package pro.sdacademy.zdjava137.group3.collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pro.sdacademy.zdjava137.group3.entity.User;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCollection {
    private List<User> user;
}
