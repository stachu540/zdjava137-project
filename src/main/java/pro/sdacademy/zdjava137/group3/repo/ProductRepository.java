package pro.sdacademy.zdjava137.group3.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import pro.sdacademy.zdjava137.group3.entity.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {

    //Metoda findAll() jest już dostarczana przez interfejs JpaRepository,
    // więc nie jest konieczne dodawanie tej metody do ProductRepository

    List<Product> findByCategory(String category);
    Optional<Product> findById(Long productId);
    Product save(Product product);
    void deleteById(Long productId) throws ProductNotFoundException;

    //Wyjątek jest oznaczony adnotacją @ResponseStatus(HttpStatus.NOT_FOUND), która informuje framework,
    // że w przypadku rzucenia tego wyjątku, należy zwrócić kod odpowiedzi
    // HTTP 404 (Not Found) w odpowiedzi na żądanie.
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public class ProductNotFoundException extends RuntimeException {
        public ProductNotFoundException(String message) {
            super(message);
        }
    }





}
