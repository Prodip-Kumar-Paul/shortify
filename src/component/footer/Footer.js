const style = {
   textDecoration: "none",
   color: "white",
   marginRight: "0.3rem",
};

const githubProfiles = [
   {
      name: "Prodip",
      link: "https://github.com/Prodip-Kumar-Paul",
   },
];

const Footer = () => {
   const date = new Date();
   const year = date.getFullYear();
   return (
      <div
         style={{
            backgroundColor: "#1B1B1B",
            padding: "2%",
            textAlign: "center",
            color: "white",
            width: "100%",
            paddingTop: "1rem",
            marginBottom: "-2rem",
         }}
      >
         <div>
            <a
               style={{
                  ...style,
                  marginRight: "1rem",
               }}
               href="/"
            >
               Home
            </a>
         </div>

         <p>Copyright@{year}</p>
         <p>
            Made with 💖 by CodeSwinger (
            {githubProfiles.map((profile) => (
               <a style={style} key={"1"} href={profile.link}>
                  {profile.name}
               </a>
            ))}
            )
         </p>
      </div>
   );
};

export default Footer;
