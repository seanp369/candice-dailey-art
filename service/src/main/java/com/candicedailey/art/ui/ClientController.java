package com.candicedailey.art.ui;

import org.springframework.boot.autoconfigure.web.servlet.error.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import static java.util.Collections.emptyMap;

@Controller
public class ClientController {

    @Bean
    public ErrorViewResolver defaultNotFoundToAngularSinglePage() {
        return (request, status, model) -> status == HttpStatus.NOT_FOUND ? new ModelAndView("forward:/", emptyMap(), HttpStatus.OK) : null;
    }

    @RequestMapping("/")
    public String root() {
        return "index.html";
    }
}
