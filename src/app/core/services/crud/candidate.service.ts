import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../global/api.service';
import { Candidate } from '../../models/classes';
import { Response } from '../../models/interfaces';
import { LocalStorage } from '../../utils/localStorage';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidate = new Candidate({});
  private $percentage = new BehaviorSubject(0);
  percentage = this.$percentage.asObservable();

  private $changes = new BehaviorSubject(false);
  changes = this.$changes.asObservable();

  constructor(private apiService: ApiService) { }

  setPercentage(percentage) {
    this.$percentage.next(percentage);
  }

  setChanges(change) {
    this.$changes.next(change);
  }

  /**
   * user steper ws
   */
  changeInfos(values) {
    return this.apiService.put('account-ms/candidats/profile/change-infos', values);
  }

  shwoProfil(candidateId) {
    return this.apiService.get(`account-ms/candidats/${candidateId}`);
  }

  /**
   * create profile
   */
  // createProfile() {
  //   return this.apiService.post('candidates/profile', this.candidate);
  // }

  /**
   * update candidate infos
   * @param infos
   */
  updateInfos(infos): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/infos', infos);
  }

  /**
   * update candidate goals
   * @param goals
   */
  updateGoals(goals): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/goals', goals);
  }

  /**
   * update candidate video
   * @param goals
   */
  updateVideo(video): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/video', video);
  }

  /**
   * update candidate experiences
   * @param experiences
   */
  updateExperience(experiences): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/experiences', experiences);
  }

  /**
   * update candidate trainings
   * @param experiences
   */
  updateTraining(trainings): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/trainings', trainings);
  }

  /**
   * update candidate cv
   * @param cv
   */
  updateCV(cv): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/cv', { cv });
  }

  /**
   * update candidate languages
   * @param languages
   */
  updateLanguage(languages): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/language', languages);
  }

  /**
   * update candidate soft skills
   * @param skills
   */
  updateSoftSkills(skills): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/soft-skills', skills);
  }

  /**
   * update candidate soft skills
   * @param social
   */
  updateSocialNetworks(social): Observable<Response> {
    return this.apiService.put('account-ms/candidats/profile/social-network', social);
  }

  /**
   * update candidate soft skills
   * @param languages
   */
  updatePicture(values): Observable<Response> {
    return this.apiService.post('account-ms/candidats/picture', values);
  }

  clearCandidate() {
    this.candidate = new Candidate({});
    this.setPercentage(0);
    LocalStorage.clear();
  }

}
