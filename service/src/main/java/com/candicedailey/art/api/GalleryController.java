package com.candicedailey.art.api;

import com.candicedailey.art.api.response.Image;
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

//@RestController
//@RequestMapping("/api")
public class GalleryController {

    //@RequestMapping(value = "/images", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Image> images() throws IOException {
        List<Image> images = new ArrayList<>();
        File imgesPath = new ClassPathResource("public/img/gallery/primary").getFile();
        for (File imageFile : imgesPath.listFiles()) {
            images.add(new Image(imageFile.getPath(), imageFile.getPath(), "A", 0));
        }
        return images;
    }
}
