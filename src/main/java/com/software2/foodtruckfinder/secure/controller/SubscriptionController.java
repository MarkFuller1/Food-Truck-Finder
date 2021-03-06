package com.software2.foodtruckfinder.secure.controller;

import com.software2.foodtruckfinder.secure.model.Subscription;
import com.software2.foodtruckfinder.secure.model.UserPreferences;
import com.software2.foodtruckfinder.secure.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller // This means that this class is a Controller
@RequestMapping(path = "/v/subscription")
public class SubscriptionController {

    @Autowired
    private UserRepository uRepository;
    @Autowired
    private TruckRepository truckRepository;
    @Autowired
    private SubscriptionRepository subRepository;

    public SubscriptionController(SubscriptionRepository sr) {
        this.subRepository = sr;
    }

    @PostMapping(path = "/add")
    public @ResponseBody
    ResponseEntity<Subscription> addNewSubscription(@RequestParam("uid") Long uid, @RequestParam("truckId") Long truckId) {
        Subscription n = new Subscription();
        n.setUid(uid);
        n.setTruckid(truckId);

        Subscription generatedS = subRepository.save(n);
        return new ResponseEntity<Subscription>(generatedS, HttpStatus.OK);
    }

    @GetMapping(path = "/")
    public @ResponseBody
    Iterable<Subscription> getAllSubscription() {
        // This returns a JSON or XML with the users
        return subRepository.findAll();
    }

    @DeleteMapping(path = "/delete")
    public @ResponseBody
    Boolean deleteAllSubscriptions() {
        subRepository.deleteAll();
        return true;
    }

    @DeleteMapping(path = "/unsubscribe")
    public @ResponseBody
    Boolean unSubscribe(@RequestParam("subscriptionid") Long subscriptionid) {
        subRepository.deleteById(subscriptionid);
        return true;
    }

    @GetMapping(path = "/getAllByTruck")
    public @ResponseBody
    Iterable<Subscription> getAllSubscription(Long truckid) {
        // This returns a JSON or XML with the users
        return subRepository.findReviewsByTruckId(truckid);
    }


    @GetMapping(path = "/getSubscriptionByID")
    public @ResponseBody
    Subscription findSubscriptionById(Long id) {
        System.out.println(id);
        return subRepository.findSubscriptionById(id);
    }

    @GetMapping(path = "/getSubscriptionsByUserID")
    public @ResponseBody
    Iterable<Subscription> findSubscriptionsByUserID(Long uid) {
        return subRepository.findSubscriptionsByUid(uid);
    }

    @PutMapping(value = "update", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Subscription> updateSubscription(@RequestBody Subscription s) {

        if (subRepository.existsById(s.getId())) {
            Subscription n = new Subscription();
            n.setId(s.getId());
            n.setUid(s.getUid());
            n.setTruckid(s.getTruckid());

            Subscription generatedSub = subRepository.save(n);
            return new ResponseEntity<Subscription>(generatedSub, HttpStatus.OK);
        } else {
            return null;
        }
    }

}
