package com.software2.foodtruckfinder.secure.controller;

import com.software2.foodtruckfinder.secure.model.Menu;
import com.software2.foodtruckfinder.secure.repository.MenuRepository;
import com.software2.foodtruckfinder.secure.service.ImageProcessingAlgo.Tess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin
@Controller // This means that this class is a Controller
@RequestMapping(path = "/v/menu/")
public class MenuController {

    @Autowired
    private MenuRepository mRepository;

    public MenuController(MenuRepository mRepository) {
        this.mRepository = mRepository;
    }

    @PostMapping(path = "add/{truckid}", consumes = {"multipart/form-data"})
    public @ResponseBody
    ResponseEntity<Menu> addNewMenu(MultipartFile file, @PathVariable("truckid") Long id) throws IOException {
        System.out.println(file.getOriginalFilename());
        System.out.println(file.getName());
        System.out.println(id);
        if(mRepository.existsBytruckid(id)){
            System.out.println("entered already exists");
            ResponseEntity<Menu> response = updateMenu(findByTruckId(id));
            return response;
        }
        else{
            System.out.println("entered doesn't exist");
            Menu n = new Menu();
            n.setCover(file.getBytes());

            n.setTruckid(id);
            String words = new Tess().getWords(file.getBytes());
            System.out.println(words.length() + " " + words);
            n.setText(words);
            System.out.println(n.getId());
            System.out.println(n.getCover());
            System.out.println(n.getTruckid());

            if (n.getCover() == null || n.getTruckid() == null) {
                // do nothing
                System.out.println("nothing happened");
                return new ResponseEntity<Menu>(new Menu(), HttpStatus.BAD_REQUEST);
            }
            Menu generatedM = mRepository.save(n);
            return new ResponseEntity<Menu>(generatedM, HttpStatus.OK);
        }
    }


    @DeleteMapping(path = "delete")
    public @ResponseBody
    Boolean deleteAllMenus() {
        mRepository.deleteAll();
        return true;
    }

    @GetMapping(path = "findByTruckID")
    public @ResponseBody
    Menu findByTruckId(Long truck){
        return mRepository.findBytruckid(truck);
    }

    @PutMapping(value = "updateMenu", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Menu> updateMenu(@RequestBody Menu mdets) {

        if(mRepository.existsById(mdets.getId())){

            mRepository.deleteById(mdets.getId());

            Menu newM = new Menu();
            newM.setText(new Tess().getWords(mdets.getCover()));
            newM.setId(mdets.getId());
            newM.setTruckid(mdets.getTruckid());
            newM.setCover(mdets.getCover());

            Menu generatedMenu = mRepository.save(newM);

            return new ResponseEntity<Menu>(generatedMenu, HttpStatus.OK);
        }else{
            return null;
        }
    }

    @DeleteMapping(path = "/removeByTruck")
    public @ResponseBody
    Boolean deleteByTruck(Long tid) {
        mRepository.deleteBytruckid(tid);
        return true;
    }

    @DeleteMapping(path = "/removeMenu")
    public @ResponseBody
    Boolean removeMenu(Long mid) {
        mRepository.deleteMenu(mid);
        return true;
    }

    @GetMapping(path="/{id}")
    public @ResponseBody
    ResponseEntity<?> getMenuByTruckId(@PathVariable("id")Long id){
        return new ResponseEntity<>(mRepository.getOne(id), HttpStatus.OK);
    }
}
