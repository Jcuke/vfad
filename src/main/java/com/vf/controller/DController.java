package com.vf.controller;

import com.vf.com.vf.util.CommonResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "")
public class DController {

    private static final Logger LOG = LoggerFactory.getLogger(DController.class);
    @Value("${ad.url1}")
    private String url;

//    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping(value = "requests")
    public CommonResponse requests() {
        restTemplate = new RestTemplate();
        CommonResponse resp = new CommonResponse();
        try {
            List list = restTemplate.getForObject(url + "requests", List.class);
            resp.setContent(list);
        } catch (Exception e) {
            resp.setMessage(e.getMessage());
            resp.setSuccess(false);
            LOG.error("WJW0102 public CommonResponse requests() Exception:" + e.getMessage());
        }
        return resp;
    }

    @RequestMapping(value = "requests_add",
    method = RequestMethod.POST,
    produces = MediaType.APPLICATION_JSON_VALUE)
    public CommonResponse requests(@RequestBody Map map) {
        restTemplate = new RestTemplate();
        CommonResponse resp = new CommonResponse();
        try {
            Object object = restTemplate.postForObject(url + "requests", map, Object.class);
            resp.setContent(object);
        } catch (Exception e) {
            resp.setMessage(e.getMessage());
            resp.setSuccess(false);
            LOG.error("WJW0103 public CommonResponse requests(@RequestBody Map map) Exception:" + e.getMessage());
        }
        return resp;
    }

//    public static void main(String[] args) {
//        String url = "http://10.5.6.35:7099/singularity/api/";
//        RestTemplate restTemplate = new RestTemplate();
//        List list = restTemplate.getForObject(url + "requests", List.class);
//        System.out.println(list.size());
//    }

    @RequestMapping(value = "tasks/active")
    public CommonResponse tasks() {
        CommonResponse resp = new CommonResponse();
        try {
            List list = restTemplate.getForObject(url + "tasks/active", List.class);
            resp.setContent(list);
        } catch (Exception e) {
            resp.setMessage(e.getMessage());
            resp.setSuccess(false);
            LOG.error("WJW01252 public CommonResponse tasks() Exception:" + e.getMessage());
        }
        return resp;
    }

}
