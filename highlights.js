function GetKeywords (){
var keywords = ['abstract','as','base','bool','break','byte','case','catch',
'char','checked','class','const','continue','decimal','default','delegate',
'do','double','else','enum','event','explicit','extern','false','finally',
'fixed','float','for','foreach','goto','if','implicit','in','int','interface',
'internal','is','lock','long','namespace','new','null','object','operator',
'out','override','params','private','protected','public','readonly','ref',
'return','sbyte','sealed','short','sizeof','stackalloc','static','string',
'struct','switch','this','throw','true','try','typeof','uint','ulong','unchecked',
'unsafe','ushort','using','virtual','void','volatile','while'];
var s='';
var i;
for (i=0;i<keywords.length-1;i++){
	s+=keywords[i]+'|';
}
s+=keywords[keywords.length-1];
s='(?<=[^\\w])('+s+')(?=[^\\w])';
var r= new RegExp(s,'g');
return r;
}

function GetClasses (){
	key = ['AccelerationEvent','AnchoredJoint2D','AndroidInput','AndroidJavaClass',
	'AndroidJavaObject','AndroidJavaProxy','AndroidJNI','AndroidJNIHelper',
	'Animation','AnimationClip','AnimationClipPair','AnimationCurve','AnimationEvent',
	'AnimationInfo','AnimationState','Animator','AnimatorClipInfo',
	'AnimatorControllerParameter','AnimatorOverrideController','AnimatorStateInfo',
	'AnimatorTransitionInfo','AnimatorUtility','Application','AreaEffector2D',
	'AssetBundle','AssetBundleCreateRequest','AssetBundleManifest','AssetBundleRequest',
	'AsyncOperation','AudioChorusFilter','AudioClip','AudioConfiguration',
	'AudioDistortionFilter','AudioEchoFilter','AudioHighPassFilter','AudioListener',
	'AudioLowPassFilter','AudioRenderer','AudioReverbFilter','AudioReverbZone',
	'AudioSettings','AudioSource','Avatar','AvatarBuilder','AvatarMask',
	'Behaviour','BillboardAsset','BillboardRenderer','BitStream','BoneWeight',
	'BoundingSphere','Bounds','BoundsInt','BoxCollider','BoxCollider2D',
	'BuoyancyEffector2D','Cache','CachedAssetBundle','Caching','Camera',
	'Canvas','CanvasGroup','CanvasRenderer','CapsuleCollider','CapsuleCollider2D',
	'CharacterController','CharacterInfo','CharacterJoint','CircleCollider2D','Cloth',
	'ClothSkinningCoefficient','ClothSphereColliderPair','ClusterInput','ClusterNetwork',
	'Collider','Collider2D','ColliderDistance2D','Collistion','Collision2D',
	'Color','Color32','ColorUtility','CombineInstance','Compass','Component',
	'CompositeBuilder2D','ComputeBuffer','ComputeShader','ConfigurableJoint',
	'ConstantForce','ConstantForce2D','ContactFilter2D','ContactPoint','ContactPoint2D',
	'ControllerColliderHit','Coroutine','CrashReport','Cubemap','CubemapArray',
	'CullingGroup','CullingGroupEvent','Cursor','CustomRenderTexture','CustomRenderTextureUpdateZone',
	'CustomYieldInstruction','Debug','DetailPrototype','Display','DistanceJoint2D',
	'DrivenRectTransformTracker','DynamicGI','EdgeCollider2D','Effect2D',
	'EllipsoidParticleEmitter','Event','ExitGUIException','ExposedPropertyResolver',
	'ExposedReference','FixedJoint','FixedJoint2D','Flare','FlareLayer','Font',
	'FrameTiming','FrameTimingManager','FrictionJoint2D','FrustumPlanes',
	'GameObject','GeometryUtility','Gizmos','GL','Gradient','GradientAlphaKey',
	'GradientColorKey','Graphics','Grid','GridBrushBase','GridLayout','GUI',
	'GUIContent','GUIElement','GUILayer','GUILayout','GUILayoutOption',
	'GUILayoutUtility','GUISettings','GUISkin','GUIStyle','GUIStyleState',
	'GUIText','GUITexture','GUIUtility','Gyroscope','Handheld','Hash128',
	'HingeJoint','HingeJoint2D','HostData','HumanBone','HumanDescription',
	'HumanLimit','HumanPose','HumanPoseHandler','HumanTrait','ImageConversion',
	'Input','Joint','Joint2D','JointAngleLimits2D','JointDrive','JointLimits',
	'JointMotor','JointMotor2D','JointSpring','JointSuspension2D',
	'JointTranslationLimits2D','JsonUtility','Keyframe','LayerMask','LensFlare',
	'Light','LightBakingOutput','LightmapData','LightmapSettings','LightProbeGroup',
	'LightProbeProxyVolume','LightProbes','LineRenderer','LineUtility',
	'LocationInfo','LocationService','LOD','LODGroup','Logger','MasterServer',
	'MatchTargetWeightMask','Material','MaterialPropertyBlock','Mathf','Matrix4x4',
	'Mesh','MeshCollider','MeshFilter','MeshParticleFilter','MeshRenderer',
	'Microphone','MonoBehaviour','Motion','MovieTexture','Network',
	'NetworkMessageInfo','NetworkPlayer','NetworkView','NetworkViewID','Object',
	'OcclusionArea','OcclusionPortal','ParticleAnimator','ParticleCollisionEvent',
	'ParticleEmitter','ParticlePhysicsExtensions','ParticleRenderer','ParticleSystem',
	'ParticleSystemRenderer','PatchExtents','PhysicMaterial','Physics','Physics2D',
	'PhysicsJobOptions2D','PhysicsMaterial2D','PhysicsUpdateBehaviour2D',
	'Ping','Plane','PlatformEffector2D','PlayerPrefs','PlayerPrefsException',
	'PointEffector2D','PolygonCollider2D','Pose','ProceduralMaterial',
	'ProceduralPropertyDescription','ProceduralTexture','Projector','PropertyName',
	'QualitySettings','Quaternion','Random','RangeInt','Ray','Ray2D','RaycastCommand',
	'RaycastHit','RaycastHit2D','Rect','RectInt','RectOffset','RectTransform',
	'RectTransformUnity','ReflectionProbe','RelativeJoint2D','RemoteSettings',
	'RenderBuffer','Renderer','RendererExtensions','RenderSettings','RenderTargetSetup',
	'RenderTexture','RenderTextureDescriptor','Resolution','ResourceRequest',
	'Resources','Rigidbody','Rigidbody2D','RuntimeAnimatorController','ScalableBufferManager',
	'Screen','ScreenCapture','ScriptableObject','Security','Shader',
	'ShaderVariantCollection','SkeletonBone','SkinnedMeshRenderer','Skybox',
	'SleepTimeout','SliderJoint2D','Social','SoftJointLimit','SoftJointLimitSpring',
	'SortingLayer','SparseTexture','SphereCollider','SplatPrototype','SpringJoint',
	'SpringJoint2D','Sprite','SpriteMask','SpriteRenderer','StateMachineBehaviour',
	'StaticBatchingUtility','StreamingController','SurfaceEffector2D','SystemInfo',
	'TargetJoint2D','Terrain','TerrainCollider','TerrainData','TerrainExtensions',
	'TextAsset','TextGenerationSettings','TextGenerator','TextMesh','Texture',
	'Texture2D','Texture2DArray','Texture3D','Time','Touch','TouchScreenKeyboard',
	'TrailRenderer','Transform','Tree','TreeInstance','TreePrototype','UICharInfo',
	'UILineInfo','UIVertex','Vector2','Vector2Int','Vector3','Vector3Int',
	'Vector4','WaitforEndOfFrame','WaitForFixedUpdate','WaitForSeconds',
	'WaitForSecondsRealtime','WaitUntil','WaitWhile','WebCamDevice','WebCamTexture',
	'WebGLInput','WheelCollider','WheelFrictionCurve','WheelHit','WheelJoint2D',
	'WindZone','WWW','WWWForm','YieldInstruction'];
	
	var s='';
	var i;
	for (i=0;i<key.length-1;i++){
		s+=key[i]+'|';
	}
	s+=key[key.length-1];
	s='(?<=[^\\w])('+s+')(?=[^\\w])';
	var r= new RegExp(s,'g');
	return r;
}

function CopyComments(text){
	lines=text.split('\n');
	var i;
	var comments = [];
	for (i=0;i<lines.length;i++){
		comments[i]='';
		if (lines[i].search('//')>-1){
			comments[i] = '<span class="comment">'+lines[i].match(/\/\/.+/)+'</span>';
			lines[i] = lines[i].replace(/\/\/.+/,'');
		}
	}

	
	return comments;
}

function RemoveComments(text){
	lines=text.split('\n');
	var i;
	var comments = [];
	for (i=0;i<lines.length;i++){
		if (lines[i].search('//')>-1){
		comments[i] = '<span class="comment">'+lines[i].match(/\/\/.+/)+'</span>';
		lines[i] = lines[i].replace(/\/\/.+/,'');
		}
	}

	
	return lines.join('\n');
}

function AddComments(text,comments){
	lines=text.split('\n');
	var i;
	
	for (i=0;i<lines.length;i++){
		//if (lines[i].search('//')>-1){
		//comments[i] = '<span class="comment">'+lines[i].match(/\/\/.+/)+'</span>';
		lines[i] += comments[i];
		//}
	}

	
	return lines.join('\n');
}


function CopyStrings(text){
	
	
}

function ReplaceText(text,key,className){
	var lines=text.split('\n');
	var keywords = key;
	var i;
	for (i=0;i<lines.length;i++){
		var words = lines[i].split(' ');
		var j;
		for (j=0;j<words.length;j++){
			var k;
			var tabs = words[j].split('\t');
			for (k=0;k<tabs.length;k++){
				var n;
				for (n=0; n<keywords.length;n++){
				if (tabs[k]===keywords[n]){
					tabs[k]='<span class="'+className+'">'+tabs[k]+'</span>';
				}
			}
			
			}
			words[j]=tabs.join('\t');
		}
		lines[i]=words.join(' ');
		
	}
	
	
	text=lines.join('\n');
	return text;
}

