import { Actor, SpriteSheet, Vector, range } from "excalibur";
import { Resources } from "./resources";
import { Animation } from "excalibur";

export class Enemy extends Actor {
    
}

export class Skeleton extends Enemy {
    onInitialize(engine) {
        this.pos = new Vector(-69, 690); //Nice
        this.vel = new Vector(50, 0);
        const skeletonRunSheet = SpriteSheet.fromImageSource({
            image: Resources.RunSkeleton,
            grid: { rows: 1, columns: 4, spriteWidth: 150, spriteHeight: 150 }
        });

        const skeletonRunFrames = Animation.fromSpriteSheet(skeletonRunSheet, range(0, 3), 100);
        skeletonRunFrames.scale = new Vector(2.5, 2.5);
        this.graphics.add("run", skeletonRunFrames);
        this.graphics.use("run");
    }
}

export class Goblin extends Enemy {
    onInitialize(engine) {
        this.pos = new Vector(2000, 650);
        this.vel = new Vector(-75, 0);
        const goblinRunSheet = SpriteSheet.fromImageSource({
            image: Resources.RunGoblin,
            grid: { rows: 1, columns: 8, spriteWidth: 150, spriteHeight: 150 }
        });

        const goblinRunFrames = Animation.fromSpriteSheet(goblinRunSheet, range(0, 3), 100);
        goblinRunFrames.scale = new Vector(3, 3);
        this.graphics.add("run", goblinRunFrames);
        this.graphics.use("run");
    }
}

export class Bat extends Enemy {
    //Working on it
}