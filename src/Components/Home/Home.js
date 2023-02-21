import React from "react";
import ContactForm from "../Form/Form";
import backgroundImage from "../../images/wipe.jpg";

// for the 3 images subcomponent
import ThreeImages from "../miniComponents/threeImages";
import broom2 from "../../images/broom2.jpg";
import gloves from "../../images/gloves.jpg";
import vaccuum from "../../images/vaccuum.jpg";

function Home() {
  return (
    <div className="content">
      <div
        className="header-container"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        }}
      >
        <h1 className="header centered">Home</h1>
      </div>
      <p className="mainP">
        <ContactForm />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet
        eget augue eu feugiat. Morbi eu quam tristique, fermentum ligula sit
        amet, pellentesque orci. Praesent sit amet auctor nulla. Sed vehicula
        ipsum dolor, a tincidunt eros condimentum congue. Etiam purus sem,
        gravida id interdum vel, rhoncus sit amet arcu. Duis molestie auctor
        laoreet. Aenean consequat eros quis sodales fermentum. Nunc mattis
        consequat magna, malesuada consequat metus dignissim non. Proin et
        lectus ullamcorper, aliquam risus eu, pellentesque leo. Pellentesque
        luctus augue eget turpis mollis laoreet. Donec enim mauris, tristique a
        lacus tempus, accumsan luctus lectus. Morbi quis lorem enim. Nam
        vestibulum lacus semper orci laoreet varius. Sed sollicitudin commodo
        vestibulum. Proin aliquam cursus orci eu accumsan. Fusce in maximus
        risus, a condimentum metus. Phasellus in felis dictum, congue nibh
        euismod, euismod ex. In hac habitasse platea dictumst. Cras id interdum
        lacus, dignissim ornare risus. Quisque convallis, odio ut faucibus
        aliquam, ipsum leo egestas velit, id finibus ante arcu ac lectus. Donec
        nisl lorem, vehicula nec rhoncus ut, venenatis eget mauris. In mattis
        eget nulla ac tristique. Aenean ultricies lacus vel leo feugiat, at
        fermentum mi vulputate. Donec quis diam quis orci malesuada vestibulum
        nec vitae lacus. Donec in vulputate erat. Pellentesque dui eros,
        convallis eu aliquet eget, dapibus et neque. Aenean faucibus, nisi eget
        suscipit aliquam, est dui volutpat erat, eu commodo nulla sem vitae
        purus. Vestibulum tincidunt iaculis nibh, quis lobortis tellus pharetra
        ac. Nullam id vestibulum nisi. Sed eu iaculis justo. Quisque egestas
        ultricies viverra. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Integer volutpat neque non
        lectus semper, id gravida lorem convallis. Praesent tortor erat, blandit
        at erat non, sollicitudin tempor sem. Pellentesque tincidunt, ante in
        tempus interdum, ante augue gravida neque, sed accumsan odio massa vitae
        sem. Suspendisse vitae lorem ac urna porttitor sodales. Curabitur ut
        mollis sapien. Vestibulum molestie sollicitudin ante, eu porta velit
        euismod sed. Phasellus diam odio, varius in porta in, faucibus non
        neque.Suspendisse dignissim lorem ante. Ut sit amet tristique massa.
        Suspendisse faucibus elit a nulla luctus, consectetur pretium nibh
        placerat. Proin mattis orci sed ligula ullamcorper lobortis. Duis
        consequat ullamcorper urna, ac maximus mauris placerat ac. Sed
        scelerisque, nibh eu iaculis scelerisque, dui justo varius massa, et
        tincidunt ipsum elit eget augue. Nulla eu tellus libero. Phasellus
        scelerisque risus leo, nec pretium ipsum finibus ac. Nam sit amet justo
        pharetra, aliquet mi non, porta lacus. Aenean id odio luctus enim
        tincidunt maximus vitae ut tortor. Nullam molestie consequat faucibus.
        Aliquam quis velit facilisis, sodales felis at, dignissim justo.
        Curabitur vehicula, lorem vitae ultricies interdum, ipsum neque
        condimentum metus, eu semper est erat sed ligula. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Maecenas eros enim, bibendum nec
        ultricies tristique, sodales in nisi. Vestibulum tellus nisl, tempus et
        congue eu, lobortis quis libero. Vivamus blandit gravida ipsum, sit amet
        pharetra nisl. Fusce vel commodo magna. Maecenas est arcu, molestie non
        dolor sit amet, mattis vehicula metus. Vivamus sit amet nunc eu nunc
        elementum pharetra. Morbi aliquam, justo ac pellentesque egestas, nunc
        ligula posuere massa, sed condimentum dui mauris sit amet dui. Aenean
        ultricies dui nec augue laoreet, quis rutrum augue maximus. Pellentesque
        dui tortor, lobortis porttitor consectetur tincidunt, dapibus ut tortor.
        Ut feugiat pretium posuere.pharetra, aliquet mi non, porta lacus. Aenean
        id odio luctus enim tincidunt maximus vitae ut tortor. Nullam molestie
        consequat faucibus. Aliquam quis velit facilisis, sodales felis at,
        dignissim justo. Curabitur vehicula, lorem vitae ultricies interdum,
        ipsum neque condimentum metus, eu semper est erat sed ligula. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. Maecenas eros enim,
        bibendum nec ultricies tristique, sodales in nisi. Vestibulum tellus
        nisl, tempus et congue eu, lobortis quis libero. Vivamus blandit gravida
        ipsum, sit amet pharetra nisl. Fusce vel commodo magna. Maecenas est
        arcu, molestie non dolor sit amet, mattis vehicula metus. Vivamus sit
        amet nunc eu nunc elementum pharetra. Morbi aliquam, justo ac
        pellentesque egestas, nunc ligula posuere massa, sed condimentum dui
        mauris sit amet dui. Aenean ultricies dui nec augue laoreet, quis rutrum
        augue maximus. Pellentesque dui tortor, lobortis porttitor consectetur
        tincidunt, dapibus ut tortor. Ut feugiat pretium posuere.
      </p>

      <ThreeImages
        imageLeft={{
          src: broom2,
          text: "Residential Cleaning",
          theLink: "/Services",
        }}
        imageCenter={{
          src: gloves,
          text: "Move Out Cleaning",
          theLink: "/Services",
        }}
        imageRight={{
          src: vaccuum,
          text: "Commercial Cleaning",
          theLink: "/Services",
        }}
      />
    </div>
  );
}

export default Home;
