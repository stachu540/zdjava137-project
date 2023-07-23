package pro.sdacademy.zdjava137.group3.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.net.URI;


/**
 * Base controller of all endpoints
 */
@Controller
public class MainController {

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

    @GetMapping("/logout")
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

}
