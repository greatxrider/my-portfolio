const MyStory = () => {
    return (
        <div className="mystory-content">
            <h1 className="mystory-title">ALL ABOUT ME</h1>
            <div className="mystory-dailyRoutine">
                <h1 className="mystory-dailyRoutine-title">I KEEP THINGS ORGANIZED</h1>
                <div className="mystory-dailyRoutine-content">
                    <div className="mystory-dailyRoutine-row">
                        <div className="mystory-dailyRoutine-imageContainer-D">
                            <img src="/src/app/assets/png/dailyRoutine.png" alt="Daily Routine" />
                        </div>
                        <div className="mystory-dailyRoutine-imageContainer-G">
                            <img src="/src/app/assets/png/ganttChart.png" alt="Gantt Chart" />
                        </div>
                    </div>
                    <div className="mystory-dailyRoutine-row">
                        <div className="mystory-dailyRoutine-imageContainer-T">
                            <img src="/src/app/assets/png/toDo.png" alt="To Do" />
                        </div>
                        <div className="mystory-dailyRoutine-textContainer-p">
                            <p>For all my peers who are also on the journey of changing careers or finding their path, I believe all of you, my brothers, can relate to what I have done similar to here. It was a turning point and one of the most unforgettable enjoyable moments of my life. I truly felt alive during those times when I was just starting to change my life.</p>
                        </div>
                    </div>
                </div>
                <div className="mystory-dailyRoutine-summary">
                    <p>Basically, my routine was simple:</p>
                    <h2>EAT, SLEEP, CODE, REPEAT</h2>
                </div>
            </div>
            <div className="mystory-workingOut">
                <h1 className="mystory-workingOut-title">I WORK OUT</h1>
                <div className="mystory-workingOut-content">
                    <div className="mystory-workingOut-row">
                        <div className="mystory-workingOut-imageContainer-w">
                            <img src="/src/app/assets/png/gym.JPG" alt="Working Out" />
                        </div>
                        <div className="mystory-workingOut-imageContainer-g">
                            <img src="/src/app/assets/png/9025.jpg" alt="Gym" />
                        </div>
                    </div>
                    <div className="mystory-workingOut-row">
                        <div className="mystory-workingOut-textContainer-pw">
                            <p>The gym is a man’s best friend—it's both a therapist for the mind and body, healing us emotionally and physically. </p>
                            <p>I always make time to hit the gym because working out is a part of my life and always will be. </p>
                            <p>It helps me solve problems, cope with challenges, and wipe away my tears. As long as I keep a balance and don’t let ego take over, it remains a powerful force in my life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mystory-workSetup">
                <h1 className="mystory-workSetup-title">MY WORK SETUP</h1>
                <div className="mystory-workSetup-content">
                    <div className="mystory-workSetup-row">
                        <div className="mystory-workSetup-imageContainer-ws">
                            <img src="/src/app/assets/png/workSetup.JPG" alt="Work Setup" />
                        </div>
                        <div className="mystory-workSetup-imageContainer-h">
                            <img src="/src/app/assets/png/hero.JPG" alt="Hero" />
                        </div>
                    </div>
                    <div className="mystory-workSetup-row">
                        <div className="mystory-workSetup-textContainer-pws">
                            <p>When a carpenter has the right tools, the house is well-built and comfortable. The same goes for my work setup—it directly impacts my productivity and the quality of my work.</p>
                            <p>With a fast computer, ergonomic chair, and good desk, I can work efficiently without burning out, even during overtime.</p>
                            <p>And of course, having a work buddy to help manage stress and remind me to take breaks is key to staying balanced.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyStory;
