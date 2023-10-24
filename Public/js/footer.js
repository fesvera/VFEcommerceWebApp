const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <div>
                <img src="img/logo-light.png" class="logo" alt="">
                <p class="moto">Where Style Meets Elegance <br> And Fashion Knows No Bounds</p>
            </div>
            <div class="footer-ul-container">
                <uL class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">best sellers</a></li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">New Arrivals</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">dresses</a></li>
                    <li><a href="#" class="footer-link">activewear</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                </uL>
                <uL class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">best seller</a></li>
                    <li><a href="#" class="footer-link">New Arrivals</a></li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">shirts</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">coats</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">activewear</a></li>
                </uL>
            </div>
        </div>
        <p class="footer-title">About Company</p>
        <p class="info">Welcome to VF Shop, an educational e-commerce initiative where the worlds of education and technology unite to redefine the world of fashion. This project represents a fusion of knowledge and innovation, offering a fresh perspective on the fashion landscape.</p>
        <p class="info">As a creative developer at VF Shop, I bring my passion into the project. I am deeply committed to our mission of merging fashion with education and innovation. My vision for this endeavor is to inspire learning, spark creativity, and empower individuals to excel in the realms of both fashion and technology.</p>
        <p class="info"><span class="footer-title">Support email:</span> help@vfshop.com, customersupport@vfshop.com</p>
        <p class="info"><span class="footer-title">Contact phone:</span> (800) 707-0001, (800) 707-0002</p>
        <p class="info"><span class="footer-title">Our address:</span> 1212 Market St, Santa Clara, CA, 95050</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms of Service</a>
                <a href="#" class="social-link">Privacy Policy</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">VF SHop, Best apparels online store</p>
    `;
}

createFooter();