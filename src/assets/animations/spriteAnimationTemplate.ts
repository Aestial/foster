/**
 * An animation template handles a single Animation in an Sprite Template (ex. Player.Run)
 */
class SpriteAnimationTemplate
{
	/**
	 * The name of the Animation
	 */
	public name:string;

	/**
	 * The Speed the animation runs (frame index += speed * delta)
	 */
	public speed:number;

	/**
	 * The frames of this animation
	 */
	public frames:Texture[];

	/**
	 * The origin to render with
	 */
	public origin:Vector;

	/**
	 * The position to render at
	 */
	public position:Vector;

	/**
	 * If this animation should loop
	 */
	public loops:boolean = false;

	/**
	 * What animation(s) the Sprite should go to next upon completion
	 */
	public goto:string[] = null;
	
	constructor(name:string, speed:number, frames:Texture[], loops?:boolean, position?:Vector, origin?:Vector)
	{
		this.name = name;
		this.speed = speed;
		this.frames = frames;
		this.loops = loops || false;
		this.position = (position || new Vector(0, 0));
		this.origin = (origin || new Vector(0, 0));
	}
}