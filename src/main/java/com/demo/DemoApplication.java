package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@SpringBootApplication
@RestController
public class DemoApplication {

    @GetMapping("/")
    public Map<String, String> home() {
        return Map.of(
                "environment", "PRODUCTION",
                "status", "Running",
                "timestamp", LocalDateTime.now().toString(),
                "message", "Production environment is operational"
        );
    }

    @GetMapping("/health")
    public String health() {
        return "PRODUCTION HEALTH OK";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
