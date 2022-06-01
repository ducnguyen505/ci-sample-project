<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteCollectionEntity>
   <description></description>
   <name>New Test Suite Collection</name>
   <tag></tag>
   <delayBetweenInstances>20</delayBetweenInstances>
   <executionMode>PARALLEL</executionMode>
   <maxConcurrentInstances>8</maxConcurrentInstances>
   <testSuiteRunConfigurations>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 2,
  &quot;os&quot;: &quot;linux&quot;,
  &quot;osDisplayName&quot;: &quot;Linux&quot;,
  &quot;browserName&quot;: &quot;chrome&quot;,
  &quot;browserDisplayName&quot;: &quot;Chrome&quot;,
  &quot;browserVersion&quot;: &quot;88&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 3
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/WebUI Keywords Test</testSuiteEntity>
      </TestSuiteRunConfiguration>
      <TestSuiteRunConfiguration>
         <configuration>
            <groupName>Web Desktop</groupName>
            <profileName>default</profileName>
            <runConfigurationData>
               <entry>
                  <key>testCloudEnvironment</key>
                  <value>{
  &quot;id&quot;: 4,
  &quot;os&quot;: &quot;linux&quot;,
  &quot;osDisplayName&quot;: &quot;Linux&quot;,
  &quot;browserName&quot;: &quot;firefox&quot;,
  &quot;browserDisplayName&quot;: &quot;Firefox&quot;,
  &quot;browserVersion&quot;: &quot;86&quot;,
  &quot;usingTunnel&quot;: false,
  &quot;timeout&quot;: 3
}</value>
               </entry>
            </runConfigurationData>
            <runConfigurationId>TestCloud</runConfigurationId>
         </configuration>
         <runEnabled>true</runEnabled>
         <testSuiteEntity>Test Suites/WebUI Keywords Test</testSuiteEntity>
      </TestSuiteRunConfiguration>
   </testSuiteRunConfigurations>
</TestSuiteCollectionEntity>
