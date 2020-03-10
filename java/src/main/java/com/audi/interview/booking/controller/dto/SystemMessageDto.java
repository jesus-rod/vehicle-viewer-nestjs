package com.audi.interview.booking.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@Builder
@AllArgsConstructor
public class SystemMessageDto {

    private HttpStatus status;

    private String error;

    private String message;

}
