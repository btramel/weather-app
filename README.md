# Weather App

Languages: Javascript, CSS, HTML<br>

APIs: OpenWeatherMap, Geolocation, Fetch<br>

Features: Local storage, fahrenheit/celsius unit toggle, form validation, environment variables, conditional aesthetics

I took on this project as part of <a href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript">The Odin Project's Javascript curriculum</a>, but quickly added additional features and functionality to practice working with APIs and asynchronous code. <br>

![weather-app](https://user-images.githubusercontent.com/66852498/162803944-0b2eb045-4b83-42fc-a75a-c0dc96bbefff.gif)

<br>
The <a href="https://openweathermap.org/current">OpenWeatherMap API</a> provides a ton of data. Extracting the necessary information from response objects -- in this case, the current, high, and low temperatures in both fahrenheit and celsius; current wind speed; and current conditions -- was daunting to start, but great practice.<br>
<br>

When implementing the unit toggle in Javascript, I decided to make two API calls using Promise.all() rather than hard-coding the conversion. Again, it served as great practice for <a href="https://github.com/btramel/AskBourdain">a later project</a> where, for instance, I found myself making simultaneous API calls to the Google Maps and Travel Advisor APIs.<br>
<br>

![Screenshot 2022-04-11 at 14-03-49 btramel_weather-app Real-time weather updates using OpenWeatherMap Geolocation and Fetch APIs  Local storage implementation  Fahrenheit_Celcius toggle  Async_Await  Aesthetic changes depending on conditions](https://user-images.githubusercontent.com/66852498/162811567-ad3ebf8f-1edd-4000-9014-cee63d1f2cff.png)


I had learned how to implement local storage <a href="https://github.com/btramel/todo">during my Do project</a>, so it was simple enough to implement here. Manipulating the global "input" variable depending on the context and user behavior was fun to work out. The app begins by searching for an "input" value in local storage, otherwise defaulting to "honolulu." From there it asks permission to use geolocation. If the user agrees, that value becomes the "input" value on page load. If not, every search by the user logs a new input value, so upon returning, the user will be presented with the current weather data from the location they searched for last.

![Screenshot 2022-04-11 at 14-02-34 btramel_weather-app Real-time weather updates using OpenWeatherMap Geolocation and Fetch APIs  Local storage implementation  Fahrenheit_Celcius toggle  Async_Await  Aesthetic changes depending on conditions](https://user-images.githubusercontent.com/66852498/162811868-84f55550-964b-44da-8609-65232b19b8e5.png)


When the page renders, it chooses a background image to display based on the conditions. I'm happy with how this turned out. In the future, I may implement an array of images for the "clouds" condition, since it is the most commonly returned condition. If the user input doesn't return a location via the API, the background shows an image of space and prompts the user to try again.

Finally, I should point out that I did not use environment variables to secure the API key I acquired from OpenWeatherMap. I do know how to implement environment variables in React (see again: the AskBourdain project linked above), but chose not to spend an hour or two configuring webpack and everything else required to secure this particular API key. Thus it is contained in the global variable "apiKey."

The project is hosted on Github Pages. <a href="https://btramel.github.io/weather-app/">Feel free to mess around with it!</a>

Thanks for reading about my weather app! Please check out my other projects, and don't hesitate to <a href="mailto:bradtramel@gmail.com">drop me a line!</a>
