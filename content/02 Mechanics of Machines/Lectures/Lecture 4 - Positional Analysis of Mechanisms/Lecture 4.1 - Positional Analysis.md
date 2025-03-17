---
tags:
  - resources/videos
---

<iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/fTj4tjo26IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="aspect-ratio:1.76991 / 1"></iframe>

---

> [!Note] [00:13](https://www.youtube.com/watch?v=fTj4tjo26IM&t=14#t=13.51) [[Analysis]] = *Prediction* of response of an already-built system to a given input, or prediction of necessary input for a required response (output)
> - Analyzing a mechanism to produce a certain output
> - Solving the problem inversely to get the required inputs for achieving the desired outputs
> - Results of analysis could be used for designing the system: in [[Analysis of Mechanisms]], for example, finding an unknown length of a link to produce a desired output when given a certain input
> - Types of [[Analysis of Mechanisms]]
> 	- Positional analysis
> 	- [[Velocity Analysis]]
> 	- Acceleration analysis
> 

---

> [!Note] [02:07](https://www.youtube.com/watch?v=fTj4tjo26IM&t=128#t=02:07.90) 
> > [!info] Chapter 1 included an intro to the analysis of mechanisms based on the understanding of mechanisms

---

> [!Note] [03:37](https://www.youtube.com/watch?v=fTj4tjo26IM&t=218#t=03:37.59) [[Modeling]] and [[Analysis]]
> - [[Modeling]] and [[Analysis]] is a replacement to manufacturing the system then trying experimentally
> -  [[Analysis]] is about finding the relation between inputs and outputs then using this relation to make predictions
> - This relation exists due to constraints within system components
> - In order to find this relation, we need to a model to express the constraints of the system
> - This model (which is just an expression of the constraints of the system) can be [[Mathematical Model|mathematical]], [[Graphical Model|graphical]], etc.
> - The mathematical model is just an expression of the constraints of the system in terms of mathematical equations or expressions
> - The relation can then be expressed [[Mathematical Model|mathematically]] or as a map between finite inputs and outputs
> - Computer programs (software, libraries, etc.) could be used to solve these relations to get the desired predictions
> - In case of [[Positional Analysis]], outputs are positions of system components
> - In case of analysis of [[Four-bar mechanism]], positional analysis is finding the relation between input angle of a link and output angles of other links
> 	- Constraints in the four-bar mechanism are the lengths of links and types of pairs
> 		- Drawing (Graphically representing the constraints of the system) and intersecting links at a certain point => Graphical solution
> 		- Writing a math equation (Mathematically representing the constraints of the system) and using the given input => Mathematical solution
> 	- [[Graphical Analysis]] - [[Graphical Position Analysis]]
> 		![[Pasted image 20250308085829.png]]
> 		> [!info] There could be two solutions, the valid solution depends on the assembly of the mechanism
> 	- [[Analytical Analysis]] - [[Analytical Position Analysis]]
> 		  ![[Pasted image 20250308094259.png]]
> 		- Loop equation

---

> [!Note] [[Design and Analysis]] are about finding unknowns and making predictions. These unknowns can be
> 1. Inputs
> 2. System ([[Mechanisms|Mechanism]]) parameters
> 3. Outputs
> 
> - [[Analysis]] is about predicting required input to satisfy desired output given system parameters OR predicting output of a certain input given system parameters. It is like a function of system parameters and either required inputs or desired outputs
> - [[Design]] is about identifying system parameters that satisfy desired outputs given allowable inputs
>
> 
> Examples:
> 1. Problem 1.9 in [[02 Mechanics of Machines/Sheets/Sheet 1|Sheet 1]] requires the length of a link (system parameters) to achieve a desired [[Quick-return ratio]] (output), then it asks about the stroke length (output of system given that the input leads to [[extreme positions]])
> 	- Note: some special inputs (like those that lead to special outputs such as angular displacement of rocker) and outputs (like those that the system was designed to achieve such as stroke length or quick return ratio) can be considered among system parameters as well. 
> 1. Problem 1.7 in [[02 Mechanics of Machines/Sheets/Sheet 1|Sheet 1]] requires the angular displacements of the crank (input) that leads to the [[Extreme positions]] of the block (output)
> 

^39fdf4

---

> [!Note] [12:37](https://www.youtube.com/watch?v=fTj4tjo26IM&t=757#t=12:37.17) [[Vectors]] revision
> - Position: using a vector to describe where a point is located
> - Displacement: using a vector to describe the change in position of a point
> - [[Motion]]: using a relation to describe the displacement of points on a rigid body
> 	- [[Translational Motion]]: all points on a rigid body  have the same displacement vector
> 	- [[Rotational Motion]]: one point on a rigid body has displacement of zero and other points non-zero displacements
> 	- [[General Plane Motion]]: all points on rigid body translate then rotate or vise versa

---

> [!Note] [18:58](https://www.youtube.com/watch?v=fTj4tjo26IM&t=1139#t=18:59.00) Cartesian and polar co-ordinates could be expressed using complex numbers and Euler form

---

> [!Note] [19:41](https://www.youtube.com/watch?v=fTj4tjo26IM&t=1181#t=19:41.30) [[Vector Loop Equation]]
> - Can be arranged to give a better expression of the system
> - Can solve for 2 unknowns in plane and for 3 unknowns in space
>  > [!info] It's not clever to just write the final equation by doing some trig; the given systems are trivial.  *You can use that just to check*. The goal is being able to model a system, even if it is complex, using mathematical equations. This is the skill that you should train.
>  
>  - More than one solution could be obtained; reject solutions that do not express your system, assembly of mechanism in case of [[Analysis of Mechanisms]]

---

> [!Note] [26:25](https://www.youtube.com/watch?v=fTj4tjo26IM&t=1586#t=26:25.90) [[Analytical Position Analysis]] on [[Slider-crank mechanism]] using [[Vector Loop Equation]]
> - In [[Analysis of Mechanisms]]:
> 	- Finding outputs given inputs and dimensions
> 	- Finding dimensions given inputs and desired outputs

---

> [!Note] [39:11](https://www.youtube.com/watch?v=fTj4tjo26IM&t=2351#t=39:11.09) [[Analytical Position Analysis]] on [[Offset Slider-Crank Mechanism]] using [[Vector Loop Equation]]
>  - [[Vector Loop Equation]] should represent the system to make use of the knowns in the system
>  ![[Pasted image 20250308104815.png]]

---

> [!Note] [47:24](https://www.youtube.com/watch?v=fTj4tjo26IM&t=2845#t=47:24.77) [[Analytical Position Analysis]] on [[Four-bar mechanism]] using [[Vector Loop Equation]]
> - Use [[Complex Numbers]] to solve non-linear equations in $\theta$s
> 	> [!info] Why does this work?
> 	> Complex number give two equations, one for real part and another for imaginary. This property can be applied by using the complex equation and its conjugate to solver for the unknown complex numbers
>   

---

> [!Note] [59:40](https://www.youtube.com/watch?v=fTj4tjo26IM&t=3580#t=59:40.38) Solved example 1 - [[Analytical Position Analysis]] on [[Quick-return mechanism]] - [[Crank-shaper mechanism]] using [[Vector Loop Equation]]
> - Use complex mode to avoid solving for x and y directions

---

> [!Note] [01:07:18](https://www.youtube.com/watch?v=fTj4tjo26IM&t=4039#t=1:07:18.54) Solved example 2 - [[Analytical Position Analysis]] on [[Four-bar mechanism]] using [[Vector Loop Equation]]
> - Using complex mode to solve for $\theta$s 

---

