import React from "react";
import backgroundImage from "../../images/contactUs.jpg";
import ContactForm from "../Form/Form";

function Contact() {
  return (
    <div className="contact content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      >
        <h1 className="header centered">Contact</h1>
      </div>
      <p>
        <ContactForm />
        Duis condimentum mauris vitae malesuada efficitur. Nulla vitae tortor ac
        enim aliquet pretium ac et risus. Integer ut consectetur magna.
        Vestibulum viverra, arcu vel vulputate ultricies, quam ex porta dui,
        laoreet iaculis ligula felis eu quam. Suspendisse potenti. Cras aliquam
        diam et sem pretium, in commodo quam venenatis. Sed euismod massa eu
        tellus malesuada ultrices. Praesent et nibh sit amet risus tincidunt
        sodales ac id dui. Duis euismod purus ut elit viverra dictum. Nullam
        tincidunt lectus quis venenatis fringilla. Vestibulum tincidunt eleifend
        volutpat. Mauris vel ipsum ac tortor congue feugiat aliquet sed diam. In
        dictum rutrum diam, eget pellentesque ante elementum in. Nunc maximus
        justo at lectus ornare egestas. Vestibulum rhoncus nisi et ligula
        mollis, sed fermentum est ultricies. Mauris a faucibus arcu. Sed
        vehicula, mi eget scelerisque egestas, leo erat laoreet enim, in pretium
        risus magna convallis lacus. Nulla finibus turpis quis ipsum fringilla,
        nec imperdiet erat gravida. Sed maximus neque non turpis iaculis mattis.
        Integer sem purus, hendrerit vitae elit sed, mollis commodo nisl. Etiam
        erat turpis, tempus sit amet libero congue, vestibulum rutrum sapien.
        Etiam sit amet risus feugiat sem faucibus blandit. Phasellus nec metus
        vitae neque euismod luctus. In vitae neque nulla. Proin in ex at neque
        porttitor commodo et a elit. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Mauris lobortis lobortis
        risus, eu dictum ante.
        <br />
        <br />
        Etiam euismod felis lectus, nec tincidunt enim lacinia quis. Suspendisse
        potenti. Quisque tempor felis tortor, at rutrum odio tempus sit amet.
        Quisque elementum, tellus bibendum maximus rutrum, elit elit lobortis
        eros, non consectetur velit quam eget lectus. Nulla maximus orci non
        porttitor accumsan. Sed hendrerit tortor bibendum fringilla sodales.
        Curabitur ligula nisi, lacinia ac libero sit amet, condimentum bibendum
        turpis. Quisque gravida purus cursus orci posuere, sit amet sodales
        lacus efficitur. Donec elit mauris, dictum ultricies mollis vitae,
        viverra non elit. Suspendisse potenti. Quisque ac mi a nisi pharetra
        fringilla vel eget ante.
        <br />
        <br />
        Aenean at augue malesuada, bibendum tellus non, consequat mauris. Etiam
        et lorem sodales mauris porttitor cursus quis nec velit. In id lorem
        porttitor, rhoncus dolor ut, iaculis tellus. Aliquam dictum ipsum sed
        neque sodales tempus. Suspendisse pellentesque metus vestibulum,
        vulputate nunc eget, aliquam sem. Praesent euismod fermentum
        pellentesque. Proin interdum ac lectus id dapibus. Nunc nec sem in
        sapien efficitur feugiat sit amet eu mauris. Praesent ultrices dui vitae
        vulputate ullamcorper. Aliquam sed viverra justo.
      </p>
    </div>
  );
}

export default Contact;
