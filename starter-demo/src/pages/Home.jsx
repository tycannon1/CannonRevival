export default function Home() {
    return(
        <div className="home">
                  <img src="public/images/banner1-4.png" alt="GTN Logo" class="banner1" />

            <h2>FEATURED STORES</h2>
           
            <img src="public/images/Untitled-2.png" alt="GTN Logo" id="storeInfo" />
        <div className="videos-container">
            <div className="video">
                <video width="250" height="360" loop autoPlay muted>
                <source src="public/Images/Snapinsta.app_video_316729936_1604240457051971_123612768098004780_n.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            
            <div className="video">
            <video width="250" height="360" loop autoPlay muted>
                <source src="public/Images/Snapinsta.app_video_B047D9F6765BFECF03E7BF852E24C0B9_video_dashinit.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="video">
            <video width="250" height="360" loop autoPlay muted>
                <source src="public/Images/Snapinsta.app_video_B846838AAAC645D5B1EC423D47A51CAA_video_dashinit.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="video">
            <video width="250" height="360" loop autoPlay muted>
                <source src="public/Images/Snapinsta.app_video_5944D0921D48966A45D5B5F76E2542AB_video_dashinit.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="video">
            <video width="250" height="360" loop autoPlay muted>
                <source src="public/Images/Snapinsta.app_video_A24BDF1F21F8D8B0CF4814EDEFC1ABB3_video_dashinit.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            </div>
            <footer className="footer">
        <p>&copy; 2024 Global Thrift Network</p>
        <p><a href="mailto:info@globalthrift.com">info@globalthrift.com</a></p>
        <p>Lehi, Utah</p>
      </footer>
        </div>
    )
}