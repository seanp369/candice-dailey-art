package com.dailey.candice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

import static java.util.Collections.emptyMap;

@SpringBootApplication
public class WebAppRunner {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(WebAppRunner.class, args);
    }

    @Bean
    public ErrorViewResolver defaultNotFoundToAngularSinglePage() {
        return (request, status, model) -> status == HttpStatus.NOT_FOUND ? new ModelAndView("index.html", emptyMap(), HttpStatus.OK) : null;
    }
}
