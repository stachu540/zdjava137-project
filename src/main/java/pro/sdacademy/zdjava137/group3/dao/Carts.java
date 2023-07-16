package pro.sdacademy.zdjava137.group3.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.sdacademy.zdjava137.group3.entity.Cart;

import java.util.UUID;

public interface Carts extends JpaRepository<Cart, UUID> {
}
