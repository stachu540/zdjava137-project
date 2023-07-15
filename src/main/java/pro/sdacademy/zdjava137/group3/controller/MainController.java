package pro.sdacademy.zdjava137.group3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.net.URI;

@Controller
public class MainController {
    @GetMapping("/product/{id}")
    public String product(@PathVariable long id, Model model) {
        return "product";
    }

    @GetMapping("/category")
    public String categories(Model model) {
        return "categories";
    }

    @GetMapping("/category/{id}")
    public String category(@PathVariable long id, Model model) {
        return "category";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    @PostMapping("/login")
    public String login(@RequestParam URI redirect) {
        // TODO: login logic
        return "redirect:" + redirect;
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/login")
    public String logout() {
        return "logout";
    }

    @GetMapping("/search")
    public String search(@RequestParam String query, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "search";
    }
    @GetMapping
    public String index() {
        return "index";
    }

    // ADMIN Mappings

    @GetMapping("/admin")
    public String admin(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/users/{id}")
    public String adminUser(@PathVariable long id, Model model) {
        return "admin/index";
    }
    @GetMapping("/admin/users")
    public String adminUsers(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/products")
    public String adminProducts(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/products/{id}")
    public String adminProduct(@PathVariable long id, Model model) {
        return "admin/index";
    }
    @GetMapping("/admin/categories/{id}")
    public String adminCategories(Model model, @RequestParam(required = false, defaultValue = "20") int limit, @RequestParam(required = false, defaultValue = "1") int page) {
        return "admin/index";
    }
    @GetMapping("/admin/categories/{id}")
    public String adminCategory(@PathVariable long id, Model model) {
        return "admin/index";
    }
}
