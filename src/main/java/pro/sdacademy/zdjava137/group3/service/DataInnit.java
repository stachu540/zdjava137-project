package pro.sdacademy.zdjava137.group3.service;


import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import pro.sdacademy.zdjava137.group3.entity.Product;
import pro.sdacademy.zdjava137.group3.repo.ProductRepository;

@AllArgsConstructor
@Component
public class DataInnit {

    private ProductRepository productRepository;

    @PostConstruct
    public void init() {

        Product bike = new Product();

        bike.setName("bike");
        bike.setDescription("Carbon road bike");
        bike.setPrice(45000);
        bike.setQuantity(2);
        productRepository.save(bike);

        Product handlebar = new Product();

        handlebar.setName("handlebar");
        handlebar.setDescription("Carbon handlebar");
        handlebar.setPrice(1800);
        handlebar.setQuantity(42);
        productRepository.save(handlebar);

        Product wheels = new Product();

        wheels.setName("enve wheels");
        wheels.setDescription("Carbon road wheelset");
        wheels.setPrice(5599);
        wheels.setQuantity(19);
        productRepository.save(wheels);

        Product wahooComputer = new Product();

        wahooComputer.setName("Wahoo Bolt v2");
        wahooComputer.setDescription("Cycling computer with gps");
        wahooComputer.setPrice(999);
        wahooComputer.setQuantity(23);
        productRepository.save(wahooComputer);

        Product skinsuit = new Product();

        skinsuit.setName("skinsuit");
        skinsuit.setDescription("racing aero skinsuit");
        skinsuit.setPrice(2233);
        skinsuit.setQuantity(52);
        productRepository.save(skinsuit);




    }
}
