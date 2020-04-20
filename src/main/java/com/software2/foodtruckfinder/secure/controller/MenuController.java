package com.software2.foodtruckfinder.secure.controller;

import com.software2.foodtruckfinder.secure.model.Menu;
import com.software2.foodtruckfinder.secure.model.Schedule;
import com.software2.foodtruckfinder.secure.model.Truck;
import com.software2.foodtruckfinder.secure.repository.MenuRepository;
import com.software2.foodtruckfinder.secure.repository.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@Controller // This means that this class is a Controller
@RequestMapping(path = "/v/menu/")
public class MenuController {

    @Autowired
    private MenuRepository mRepository;

    public MenuController(MenuRepository mRepository) {
        this.mRepository = mRepository;
    }

    @PostMapping(path = "add")
    public @ResponseBody
    ResponseEntity<Menu> addNewMenu(@RequestBody Menu newm) {
        Menu n = new Menu();
        n.setId(newm.getId());
        n.setText(newm.getText());
        n.setCover(newm.getCover());
        n.setTruckid(newm.getTruckid());

        if (n.getId() == null || n.getCover() == null || n.getTruckid() == null) {
            // do nothing
            return new ResponseEntity<Menu>(new Menu(), HttpStatus.BAD_REQUEST);
        } else {
            for (Menu m : mRepository.findAll()) {
                if (m.getId().equals(newm.getId())) {
                    return ResponseEntity.status(400).build();
                }
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
    Optional<Menu> findByTruckId(Long truck){
        return mRepository.findBytruckid(truck);
    }

    @PutMapping(value = "updateMenu", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Menu> updateMenu(@RequestBody Menu mdets) {

        if(mRepository.existsById(mdets.getId())){

            mRepository.deleteById(mdets.getId());

            Menu newM = new Menu();
            newM.setText(mdets.getText());
            newM.setId(mdets.getId());
            newM.setTruckid(mdets.getTruckid());
            newM.setCover(mdets.getCover());

            Menu generatedMenu = mRepository.save(newM);
            return new ResponseEntity<Menu>(generatedMenu, HttpStatus.OK);
        }else{
            return null;
        }
    }

    @DeleteMapping(path = "/removeMenu")
    public @ResponseBody
    Boolean removeMenu(Long mid) {
        mRepository.deleteMenu(mid);
        return true;
    }
}