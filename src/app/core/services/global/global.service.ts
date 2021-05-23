import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  values = [];
  availabilities = [];
  contracts = [];
  effectives = [];
  experiences = [];
  family = [];
  functions = [];
  jobModes = [];
  jobTypes = [];
  languages = [];
  languagesLevels = [];
  levelOfStudies = [];
  locations = [];
  managerialLevels = [];
  masteryLevels = [];
  softSkills = [];
  typeOfTrainings = [];
  activitySectors = [];
  programmingLanguages = [];
  logiciels = [];
  usageTitles = [];
  companies = [];
  recruiters = [];

  constructor(private apiService: ApiService) { }

  /**
   * get all directories
   */
  getDirectories(): Observable<Response> {
    return this.apiService.get('directory-ms/all').pipe(tap(x => {
      this.values = x.values;
      this.availabilities = x.availabilities;
      this.contracts = x.contracts;
      this.effectives = x.effectives;
      this.experiences = x.experienceYears;
      this.family = x.family;
      this.functions = x.functions;
      this.jobModes = x.jobModes;
      this.jobTypes = x.jobTypes;
      this.languages = x.languages;
      this.levelOfStudies = x.levelOfStudies;
      this.locations = x.locations;
      this.managerialLevels = x.managerialLevels;
      this.masteryLevels = x.masteryLevels;
      this.softSkills = x.softSkills;
      this.typeOfTrainings = x.typeOfTrainings;
      this.activitySectors = x.activitySectors;
      this.languagesLevels = x.languageLevels;
      this.programmingLanguages = x.programmingLanguages;
      this.logiciels = x.logiciels;
      this.usageTitles = x.usageTitles;
    }));
  }

}
