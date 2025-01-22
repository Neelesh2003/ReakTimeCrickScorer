package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;
import java.util.Map;

public interface CricketService {

//    get live
    List<Match> getLiveMatchScores();

//    get point table
    List<List<String>> getCWC2023PointTable();

//    get all matches
    List<Match> getAllMatches();
}
