package com.software2.foodtruckfinder.secure.repository;

import com.software2.foodtruckfinder.secure.model.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long>  {

    Schedule findByid(Long id);

    boolean existsById(Long id);

    List<Schedule> findByTruckID(Integer truckID);

}