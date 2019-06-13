import React from "react";
import "./Contact.css"

function Contact () {
  return (
        
        <div class="contact-container">

            <div class="row">

                <div class="col-lg-8 mx-auto col-lg-offset-2">


                    <form id="contact-form" method="post" action="contact-2.php" role="form">
                    <h3>Contact form</h3>

                        <div class="messages"></div>

                        <div class="controls">

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_name">Prénom *</label>
                                        <input id="form_name" type="text" name="name" class="form-control" placeholder="Entrez votre prénom *" required="required" data-error="Firstname is required."  />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_lastname">Nom *</label>
                                        <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Entrez votre nom de famille *" required="required" data-error="Lastname is required."  />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_email">Email *</label>
                                        <input id="form_email" type="email" name="email" class="form-control" placeholder="Entrez votre email *" required="required" data-error="Valid email is required."  />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="form_phone">Phone</label>
                                        <input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Entrez votre téléphone *" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_message">Message *</label>
                                        <textarea id="form_message" name="message" class="form-control" placeholder="Votre message à YellowResto *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <input type="submit" class="btnSubmit btn mx-auto" value="Envoyer"  />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="text-muted"><strong>*</strong> Ces champs sont requis. </p>
                                </div>
                            </div>
                        </div>

                    </form>
                    </div>

            </div> 

        </div>
  );
}

export default Contact;